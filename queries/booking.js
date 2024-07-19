export const booking = `
mutation makeReservation($where: ID!, $calendarEventId: String, $enrollmentId: ID) {
    makeReservation(    where: $where    calendarEventId: $calendarEventId    enrollmentId: $enrollmentId  ) {
            id    status    user {      id      __typename    }
            calendarEventId    
            slot {      id      
                box {        
                    id        name        nameSlug        email        description        address        latitude        longitude        dropinPrice        trialPrice        phone        logo        images        showOnMap        
                    manager {          id          firstname          lastname          alias          avatar          description          diploma          role          roleAlias          isVisible          __typename        }
                    coaches {          id          firstname          lastname          alias          avatar          description          diploma          role          roleAlias          isVisible          __typename        }
                    schedule {          id          dayOfTheWeek          from          to          __typename        }
                    defaultRecurrentWeek {          id          name          __typename        }
                    __typename      
                }      
                slotType {        id        name        icon        color        __typename      }      
                workoutType {        id        name        icon        __typename      }      
                alternativeTitle      
                coaches {        id        avatar        firstname        lastname        diploma        __typename      }      
                start      end      listSize      isActive      fromMapListSize      trialListSize      createdAt      updatedAt      __typename    
            }
        waitlistPosition
        __typename  
    }
}
`;