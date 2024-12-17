type Props = {
  firstname: string
  lastname: string
  age: number
  isStudent: boolean
}

const Info = ({ firstname, lastname, age, isStudent }: Props) => {
  return (
    <div>
      Name: {firstname} {lastname}, Age: {age}, Is student:{" "}
      {isStudent ? "Yes" : "No"}
    </div>
  )
}

export default Info
