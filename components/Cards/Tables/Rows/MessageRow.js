import PropTypes from "prop-types";
import TableDropdown from "../../../Dropdowns/TableDropdown"

export default function MessageRow({ color, contactMessage }) {

    return (
        <tr className="grid grid-cols-6">
            <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center">
                <span
                className={
                    "ml-3 font-bold " +
                    +(color === "light" ? "text-blueGray-600" : "text-white")
                }
                >
                    {contactMessage.firstName} {contactMessage.lastName}
                </span>
            </th>
            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                {contactMessage.email}
            </td>
            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                {contactMessage.role}
            </td>
            <td className="col-span-3 border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                {contactMessage.message}
            </td>
        </tr>
    )
}

MessageRow.defaultProps = {
    color: "light",
};
  
MessageRow.propTypes = {
    color: PropTypes.oneOf(["light", "dark"]),
};