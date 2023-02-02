import Image from "next/image";
import moment from "moment";

export const UserColumns = [
  {
    id: "image",
    name: "",
    selector: (row) => row.image,
    width: "90px",
    center: true,
    cell: (row) => (
      <Image
        alt={row.image}
        src={row.image}
        height={38}
        width={38}
        className="rounded-full"
      />
    ),
  },
  {
    id: "firstName",
    name: "First Name",
    selector: (row) => row.firstName,
    sortable: true,
    reorder: true,
  },
  {
    id: "lastName",
    name: "Last Name",
    selector: (row) => row.lastName,
    sortable: true,
  },
  {
    id: "gender",
    name: "Gender",
    selector: (row) => row.gender,
    sortable: true,
  },
  {
    id: "email",
    name: "Email",
    selector: (row) => row.email,
    sortable: true,
  },
  {
    id: "age",
    name: "Age",
    selector: (row) => row.age,
    sortable: true,
    width: "80px",
  },
  {
    id: "phone",
    name: "Phone",
    selector: (row) => row.phone,
    sortable: true,
  },
  {
    id: "username",
    name: "Username",
    selector: (row) => row.username,
    sortable: true,
  },
  {
    id: "birthDate",
    name: "Date of Birth",
    selector: (row) => row.birthDate,
    format: (row) => moment(row.birthDate).format("ll"),
    sortable: true,
  },
];
