export const getColorFromID = ({ id }) => {
  console.log(id)
  switch (id) {
  case 'Ja':
    return '#baffc9'
  case 'Nej':
    return '#ffb3ba'
  case 'Avstår':
    return '#c7c8c9'
  case 'Frånvarande':
    return '#575859'
  }
}
