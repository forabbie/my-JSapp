const greet = (word, {first_name, last_name}) => `${word}, ${first_name} ${last_name}!`

export const goodMorning = person  => greet('Good morning', person)
export const goodAfternoon = person  => greet('Good afternoon', person)
