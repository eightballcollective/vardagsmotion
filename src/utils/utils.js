export const getColorFromID = ({ id }) => {
  switch (id) {
  case 'yes':
    return '#58df75'
  case 'no':
    return '#fc6271'
  case 'pass':
    return '#bdbdbd'
  case 'absent':
    return '#575859'
  }
}
