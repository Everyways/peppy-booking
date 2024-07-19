/**
 * This is the main entry point of the Peppy application.
 * It logs in the user, retrieves available slots, and makes reservations if applicable.
 * @module main
 */

import 'dotenv/config';

import * as utils from './modules/utils.js';
import * as email from './modules/emails.js';
import * as loginU from './modules/loginUser.js';
import * as findMtxBox from './modules/MontaurouxBox.js';
import * as boxSlots from './modules/getSlots.js';
import * as registerSlot from './modules/registerSlot.js';

/**
 * The starting point of the application.
 * It logs in the user, retrieves available slots, and makes reservations if applicable.
 * @function main
 */
function main() {
  // Get the start and end dates for the slots
  const dateFrom = utils.getTodayAt22();
  const dateTo = utils.get2DaysEnd();

  // Log in the user
  loginU.login(process.env.PEPPY_USERNAME, process.env.PEPPY_PASSWORD).then((res) => {
    const userID = res.loginPeppy.user.id;
    const myEnrollmentId = res.loginPeppy.enrollments.filter(obj => obj.offer.type === "MEMBERSHIP")[0].id;
    // Get the available slots
    boxSlots.getSlots(process.env.PEPPY_BOX, dateFrom, dateTo, res.loginPeppy.accessToken).then((responseReq) => {

      // console.log(responseReq.getSlots.edges.length + ' trainings planned for ' + dateTo);
      responseReq.getSlots.edges.forEach(element => {
        // console.log(element.node.workoutType.name + ' at ' + new Date(element.node.start).toLocaleTimeString());
        const pending = element.node.reservation.filter(obj => obj.status === "PENDING").length;
        const waiting = element.node.reservation.filter(obj => obj.status === "WAITING").length;
        const cancelled = element.node.reservation.filter(obj => obj.status === "CANCELLED").length;
        const reservation = element.node.reservation.filter(obj => obj.__typename === "Reservation").length;
        const freeSolt = (element.node.numberOfReservation + cancelled) - reservation;
        // console.log(" Availaible slot(s) " + freeSolt);

        if (element.node.workoutType.name === "Gym") {
          const message = 'Gym training found';

          // console.log(element.node);
          // console.log(utils.getTime(element.node.start));
          const gymDate = utils.getTime(element.node.start);
          // Validate if only 1 Gym trainng on Monday
          if (gymDate === 'Monday' && freeSolt > 0) {
            message = message + ' - Reservation is possible (freeslots '+ freeSolt +') \n';
            // Registration
            registerSlot.sumbitBooking(myEnrollmentId, element.node.id, res.loginPeppy.accessToken).then((responseReq) => {
              message = message + ' - Reservation done \n';
              
            });
            email.sendMail('CronJob Raspby - CrossFit'+new Date(element.node.start).toLocaleTimeString(), message);
          }
          else {
              email.sendMail('CronJob Raspby - CrossFit', 'No Gym found - '+new Date());
           
          }
        } 
        
      });
    });
  });
}



// Call the main function to start the application
main();


