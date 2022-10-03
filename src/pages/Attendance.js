import React from 'react'
import { MdOutlineAccessTime } from "react-icons/md";
import DisplayCard from "../components/DisplayCard/DisplayCard";
import Dropdown from "../components/Dropdown/Dropdown";
import Link from "../components/Link/Link";
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

const Attendance = () => {

    const data = [
        {
            date: "25 - 09 - 2022",
            days: "Monday",
            status: "Present",
            check_in: "00:00:00 Am",
            check_out: "00:00:00 Pm",
            duration: "00:00:00",
            overtime: "00:00:00",
            breaktime: "00:00:00"
        },
        {
            date: "25 - 09 - 2022",
            days: "Wedesday",
            status: "Present",
            check_in: "00:00:00 Am",
            check_out: "00:00:00 Pm",
            duration: "00:00:00",
            overtime: "00:00:00",
            breaktime: "00:00:00"
        },
        {
            date: "25 - 09 - 2022",
            days: "Friday",
            status: "Half Day",
            check_in: "00:00:00 Am",
            check_out: "00:00:00 Pm",
            duration: "00:00:00",
            overtime: "00:00:00",
            breaktime: "00:00:00"
        },
        {
            date: "25 - 09 - 2022",
            days: "Sunday",
            status: "Weekend",
            check_in: "00:00:00 Am",
            check_out: "00:00:00 Pm",
            duration: "00:00:00",
            overtime: "00:00:00",
            breaktime: "00:00:00"
        },
        {
            date: "25 - 09 - 2022",
            days: "Monday",
            status: "Holiday",
            check_in: "00:00:00 Am",
            check_out: "00:00:00 Pm",
            duration: "00:00:00",
            overtime: "00:00:00",
            breaktime: "00:00:00"
        },
        {
            date: "25 - 09 - 2022",
            days: "Tuesday",
            status: "Present",
            check_in: "00:00:00 Am",
            check_out: "00:00:00 Pm",
            duration: "00:00:00",
            overtime: "00:00:00",
            breaktime: "00:00:00"
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
                    <p className=" text-[32px] text-[#1765DC]">Attendance</p>
                    <p className="text-[#8CB5F3]">
                        Welcome to <span className="text-[#1765DC]">Mirats </span>{" "}
                        Employee’s Dashboard
                    </p>
                </div>
                <div className=" flex gap-5">
                    <div className=" bg-[#1765DC] flex items-center px-[30px]  py-[10px] justify-between  gap-3 font-[600] counter-btn-active ">
                        <div>
                            {" "}
                            <MdOutlineAccessTime className=" text-[40px]" />
                        </div>
                        <div className="">
                            <p className="text-[16px]">Check In </p>
                            <p className="text-[14px]">00:00:00 Hrs</p>
                        </div>
                    </div>
                    <div className="  flex items-center px-[30px]  py-[10px] justify-between  gap-3 font-[600] counter-btn-inactive ">
                        <div>
                            {" "}
                            <MdOutlineAccessTime className=" text-[40px]" />
                        </div>
                        <div className="">
                            <p className="text-[16px]">Break Time </p>
                            <p className="text-[14px]">00:00:00 Hrs</p>
                        </div>
                    </div>
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
                        Request for attendance
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
                                <Th>Days</Th>
                                <Th>Status</Th>
                                <Th>Check In</Th>
                                <Th>Check Out</Th>
                                <Th>Duration</Th>
                                <Th>Overtime</Th>
                                <Th>Breaktime</Th>
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


                                            <Td>{d.days}</Td>
                                            <Td><p className={`${d.status == "Weekend" || d.status == "Holiday" ? "holliday" : null}`}> {d.status}</p> </Td>
                                            <Td>
                                                {d.check_in}
                                            </Td>
                                            <Td>{d.check_out}</Td>
                                            <Td>{d.duration}</Td>
                                            <Td>{d.overtime}</Td>
                                            <Td>{d.breaktime}</Td>
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

export default Attendance