import React from 'react'
import { MdOutlineAccessTime } from "react-icons/md";
import DisplayCard from "../components/DisplayCard/DisplayCard";
import Dropdown from "../components/Dropdown/Dropdown";
import Link from "../components/Link/Link";
import ButtonWithIcon from "../components/ButtonWithIcon/ButtonWithIcon";
import { AiOutlineCheck, AiOutlineDownload } from "react-icons/ai";
import Table, {
    TableActionPopUp,
    TableBody,
    TableHead,
    TableRow,
    TableWithPagination,
    Td,
    Th,
} from "../components/Table/Table";
import Button from "../components/Button";
import { useState } from "react";
import TablePagination from "../components/Table/TablePagination";
import { TbLogout } from 'react-icons/tb';
import Chip from '../components/Chips/Chip';
import { Chips } from '../components/Chips/Chip.style';

const Leave = () => {

    const statusColors = {
        unseen: "error",
        seen: "primary",
        approved: "success",
    };

    const data = [
        {
            date: "25 - 09 - 2022",
            leavetype: "Monday",
            status: "Approved",
            remarks: "00:00:00 Am",

        },
        {
            date: "25 - 09 - 2022",
            leavetype: "Wedesday",
            status: "Approved",
            remarks: "00:00:00 Am",
        },
        {
            date: "25 - 09 - 2022",
            leavetype: "Friday",
            status: "Approved",
            remarks: "00:00:00 Am",
        },
        {
            date: "25 - 09 - 2022",
            leavetype: "Sunday",
            status: "Approved",
            remarks: "00:00:00 Am",
        },
        {
            date: "25 - 09 - 2022",
            leavetype: "Monday",
            status: "Approved",
            remarks: "00:00:00 Am",
        },
        {
            date: "25 - 09 - 2022",
            leavetype: "Tuesday",
            status: "Approved",
            remarks: "00:00:00 Am",
        },
    ];

    const [selectedRows, setSelectedRows] = useState([]);
    const [pageNumber, setPageNumber] = useState(1);
    const [rowsPerPage, setRowsPerPage] = useState(10);

    const surveyType = ["one", "two", "three"];
    let cardData = [
        {
            title: "Worked this month",
            subTitle: "24 Days",
        },
        {
            title: "Leave this month",
            subTitle: "00 Days",
        },
        {
            title: "Taken leave this year",
            subTitle: "04 Days",
        },
        {
            title: "Joining Date",
            subTitle: "03-12-2022",
        },
        {
            title: "Date of Birth",
            subTitle: "03-12-1999",
        },
    ];
    return (
        <div className=" custom-px ">
            <div className="flex justify-between  custom-py ">
                <div>
                    <p className=" text-[32px] text-[#1765DC]">Leave</p>
                    <p className="text-[#8CB5F3]">
                        Welcome to <span className="text-[#1765DC]">Mirats </span>{" "}
                        Employee’s Dashboard
                    </p>
                </div>
                <div className=" flex gap-5">
                    <ButtonWithIcon variant="filledIcon" className="p-6">
                        {<TbLogout />}Filled Icon Button
                    </ButtonWithIcon>
                </div>
            </div>
            <div className=" ">
                <div className="flex">
                    {cardData.map((item) => {
                        return (
                            <DisplayCard
                                customWidth="300px"
                                cardHeader="Card Header1"
                                cardBody="Card Body"
                            />
                        );
                    })}
                </div>
            </div>
            {/*  */}
            <div className="flex justify-between w-full my-14">
                <div className=" w-[80%] flex justify-between items-center ">
                    <Dropdown dropdownText="Survey Type" options={surveyType} />
                    <Dropdown dropdownText="Study Type" options={surveyType} />
                    <Dropdown dropdownText="Country" options={surveyType} />
                    <Dropdown dropdownText="Date" options={surveyType} />
                    <Link
                        color="#1765DC"
                        border="underline"
                        href="https://scalablecss.com/styled-components-global-styles/"
                    >
                        underlined link
                    </Link>
                </div>
            </div>
            {/*  */}
            <div className=" flex-col ">
                <TableActionPopUp selectedRows={selectedRows}>
                    <Button
                        onClick={(e) => console.log("its working", e)}
                        variant="outlined"
                        customWidth="200px"
                        className="tableBtn mx-3"
                    >
                        Delete Request for Leave
                    </Button>
                </TableActionPopUp>
                <TableWithPagination>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <Th>
                                    <input
                                        type="checkbox"
                                        onChange={(e) => {
                                            if (e.target.checked) {
                                                setSelectedRows(data);
                                            } else setSelectedRows([]);
                                        }}
                                    />
                                </Th>
                                <Th>Date</Th>
                                <Th>Leave Type</Th>
                                <Th>Remarks</Th>
                                <Th>Status</Th>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {data
                                ?.slice(
                                    pageNumber * rowsPerPage - rowsPerPage,
                                    pageNumber * rowsPerPage
                                )
                                .map((d, i) => {
                                    return (
                                        <TableRow key={i}>
                                            <Td>
                                                <input
                                                    type="checkbox"
                                                    checked={
                                                        selectedRows.filter((r) => r.id === d.id)[0]
                                                    }
                                                    onChange={(e) => {
                                                        if (e.target.checked) {
                                                            setSelectedRows((prev) => [...prev, d]);
                                                        } else
                                                            setSelectedRows((prev) => {
                                                                return prev.filter((pd) => {
                                                                    return pd.id !== d.id;
                                                                });
                                                            });
                                                    }}
                                                />
                                            </Td>

                                            <Td>{d.date}</Td>
                                            <Td>{d.leavetype}</Td>
                                            <Td>{d.remarks}</Td>
                                            <Td>
                                                {" "}
                                                <Chip
                                                    variant="filled"
                                                    color={statusColors[d.status.toLowerCase()]}
                                                >
                                                    {d.status}
                                                </Chip>{" "}
                                            </Td>
                                        </TableRow>
                                    );
                                })}
                        </TableBody>
                    </Table>
                    <TablePagination
                        rowsPerPage={rowsPerPage}
                        setRowsPerPage={setRowsPerPage}
                        pageNumber={pageNumber}
                        setPageNumber={setPageNumber}
                        totalDataCnt={data.length}
                    />
                </TableWithPagination>
            </div>
            {/*  */}

        </div >
    )
}

export default Leave