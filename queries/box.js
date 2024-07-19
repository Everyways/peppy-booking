export const findBoxQuery = ` 
  query getRestrictedBox($where: ID!) {  
    getRestrictedBox(where: $where) {
            id    name    nameSlug    email    description    address    latitude    longitude    dropinPrice    trialPrice    phone    logo    images    showOnMap    
                manager {      id      firstname      lastname      alias      avatar      description      diploma      role      roleAlias      isVisible      __typename    }
                coaches {      id      firstname      lastname      alias      avatar      description      diploma      role      roleAlias      isVisible      __typename    }
                schedule {      id      dayOfTheWeek      from      to      __typename    }    defaultRecurrentWeek {      id      name      __typename    }    __typename  }
    }
`;