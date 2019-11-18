import React, { useState, useEffect } from "react";

const Label = ({names, units, values}) => {

    return (

            <tbody>
                <tr>
                <td><strong>{names}</strong></td>
                <td>{values} {units}</td>
                </tr>       
            </tbody>

    )
}

export default Label
