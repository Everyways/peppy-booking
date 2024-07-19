export const slots = `
  query getSlots($where: SlotSearchInput, $orderBy: SlotOrderBy, $page: Int, $pageSize: Int) {
    getSlots(where: $where, orderBy: $orderBy, page: $page, pageSize: $pageSize) {
        edges {      
            node {        
                id        
                box {          id          name          email          logo          description          phone          trialPrice          dropinPrice          __typename        }
                slotType {          id          name          icon          color          __typename        }
                workoutType {          id          name          icon          __typename        }
                alternativeTitle
                reservation {
                              id         
                               user {            id            __typename          }          status          __typename        
                            }
                dropin {          id          
                    user {            id            __typename          }          
                fromMap          isTrial          __typename        }
                coaches {          id          avatar          firstname          lastname          diploma          __typename        }
                start        end        listSize        fromMapListSize        trialListSize        numberOfReservation        numberOfWaiting        isActive        createdAt        updatedAt        __typename      
            }
            __typename    
                }    
        pageInfo {      hasNextPage      hasPreviousPage      startCursor      endCursor      __typename    }    
        aggregate {      sum      __typename    } 
        __typename  
    }
}`;

