// export const loginMutation = `
//   query loginPeppy($email: String!, $password: String!) {
//     loginPeppy(data: {email: $email, password: $password}) {
        
//         user {
//             id
//             firstname
//             lastname
//             birthdate
//             email
//             phone
//             avatar
//             role
//             gender
//             address
//             zipcode
//             city
//             registrationDone
//             channelCreditAmount
//             __typename
//         }     
        
//         hasPendingReservations
//         accessToken
//         expiresIn
//         __typename
//     }
// }`;

export const loginMutation = `
    query loginPeppy($email: String!, $password: String!) {
        loginPeppy(data: {email: $email, password: $password}) {
                user {      id      firstname      lastname      birthdate      email      phone      avatar      role      gender      address      zipcode      city      registrationDone      channelCreditAmount      __typename    }
                enrollments {      id      offer {        id        box {          id          name          nameSlug          email          description          address          latitude          longitude          dropinPrice          trialPrice          phone          logo          images          showOnMap          
                manager {            id            firstname            lastname            alias            avatar            description            diploma            role            roleAlias            isVisible            __typename          }
                coaches {            id            firstname            lastname            alias            avatar            description            diploma            role            roleAlias            isVisible            __typename          }
                schedule {            id            dayOfTheWeek            from            to            __typename          }
                defaultRecurrentWeek {            id            name            __typename          }          
                __typename        }        type        title        titleSlug        image        description        duration        durationUnit        price        
                contract {          id          name          url          __typename        }       
                entries {          frequency          maxPerDay          maxPerMonth          max          __typename        }
                sellConditions {          id          type          currentValue          maxValue          maxDate          
                bindedOffer {            id            title            __typename          }
                __typename        }
                accessRights {          id          
                    box {            id            name            nameSlug            email            description            address            latitude            longitude            dropinPrice            trialPrice            phone            logo            images            showOnMap            
                        manager {              id              firstname              lastname              alias              avatar              description              diploma              role              roleAlias              isVisible              __typename            }
                        coaches {              id              firstname              lastname              alias              avatar              description              diploma              role              roleAlias              isVisible              __typename            }
                        schedule {              id              dayOfTheWeek              from              to              __typename            }
                        defaultRecurrentWeek {              id              name              __typename            }
                        __typename          
                    }
                slotTypes {            id            name            __typename          }
                __typename        
            }
            __typename
        }
        status      startDate      endDate      
        counters {        totalCount        weekCount        __typename      }
        customPrice      
        specialPrice {        price        note        start        end        __typename      }
        unpaidInvoices {        
            id        
            creditor {          id          businessName          
                box {            id            logo            name            __typename          }
                creator {            id            profilePictureUrl            __typename          }
                type          
                __typename        
            }
            subtotal        tax        total        description        paymentMethod        
            enrollment {          id          __typename        }
            lines {          id          
                shopItem {            id            name            image            description            __typename          }
                description          amount          unitAmount          quantity          
                discounts {            id            
                    coupon {              name              amountOff              percentOff              __typename            }
                    __typename          
                }
                __typename
            }
            status        
            charge {          id          failureMessage          __typename        }
            dueDate        paymentDate        createdAt        __typename      
        }      
        paymentMethod      renewal      __typename    
            }       
        hasPendingReservations    accessToken    expiresIn    __typename  
        }
    }`;