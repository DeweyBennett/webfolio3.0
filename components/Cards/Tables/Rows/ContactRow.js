import PropTypes from "prop-types";
import TableDropdown from "../../../Dropdowns/TableDropdown"

export default function ContactRow({ color, contact }) {

    return (
        <tr>
            <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center">
                <img
                    src="/img/bootstrap.jpg"
                    className="h-12 w-12 bg-white rounded-full border"
                    alt="..."
                ></img>{" "}
                <span
                className={
                    "ml-3 font-bold " +
                    +(color === "light" ? "text-blueGray-600" : "text-white")
                }
                >
                    {contact.firstName} {contact.lastName}
                </span>
            </th>
            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                {contact.email}
            </td>
            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                <i className="fas fa-circle text-orange-500 mr-2"></i> {contact.phoneNumber}
            </td>
            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                {contact.organization}
            </td>
            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                {contact.jobTitle}
            </td>
            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-right">
                <TableDropdown />
            </td>
        </tr>
    )
}

ContactRow.defaultProps = {
    color: "light",
  };
  
  ContactRow.propTypes = {
    color: PropTypes.oneOf(["light", "dark"]),
  };