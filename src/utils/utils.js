export const getColorFromID = ({ id }) => {
  console.log(id)
  switch (id) {
  case 'Ja':
    return '#58df75'
  case 'Nej':
    return '#fc6271'
  case 'Avstår':
    return '#bdbdbd'
  case 'Frånvarande':
    return '#575859'
  }
}
