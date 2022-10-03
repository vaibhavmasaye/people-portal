import React from "react";
import { AiOutlineDownload } from "react-icons/ai";
import { MdOutlineAccessTime } from "react-icons/md";
import { Link } from "react-router-dom";
import Chip from "../components/Chips/Chip";
import DisplayCard from "../components/DisplayCard/DisplayCard";
import LinkButton from "../components/LinkButton/LinkButton";

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

let attendceCard_tableData = [
  {
    date: "14 Sept 2022",
    leaveType: "Sick Leave",
    status: true,
  },
  {
    date: "16 Sept 2022",
    leaveType: "Sick Leave",
    status: true,
  },
  {
    date: "17 Sept 2022",
    leaveType: "Sick Leave",
    status: true,
  },
  {
    date: "18 Sept 2022",
    leaveType: "Sick Leave",
    status: true,
  },
];

let SalaryCard_data = [
  {
    Date: "Oct 2022",
    InvoiceNo: "MHBP-8934-799",
    Status: true,
  },
  {
    Date: "Sept 2022",
    InvoiceNo: "MHBP-8934-799",
    Status: true,
  },
  {
    Date: "Aug 2022",
    InvoiceNo: "MHBP-8934-799",
    Status: true,
  },
  {
    Date: "July 2022",
    InvoiceNo: "MHBP-8934-799",
    Status: true,
  },
];

const Dashboard = () => {
  return (
    <div className=" custom-px ">
      <div className="flex justify-between  custom-py ">
        <div>
          <p className=" text-[32px] text-[#1765DC]">Dashboard</p>
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
      <div className="my-[50px] grid grid-cols-2 gap-[40px] ">
        <div className="h-[288px] custom-statCard">
          <div className="border-b flex items-end gap-4 px-10 py-4">
            <p className="text-[18px] font-[600]"> Attendance</p>
            <a href="#" className="text-[12px] text-[#5C96EE]">
              Vilew All {">"}
            </a>
          </div>
        </div>
        <div className="h-[288px] custom-statCard">
          <div className="border-b flex items-end gap-4 px-10 py-4">
            <p className="text-[18px] font-[600]"> Attendance</p>
            <a href="#" className="text-[12px] text-[#5C96EE]">
              Vilew All {">"}
            </a>
          </div>
        </div>{" "}
        {/*  Leave Approval Status */}
        <div className="h-[288px] custom-statCard">
          <div className="border-b flex items-end gap-4 px-10 py-4">
            <p className="text-[18px] font-[600]"> Leave Approval Status </p>
            <a href="#" className="text-[12px] text-[#5C96EE]">
              Vilew All {">"}
            </a>
          </div>
          <div>
            <table id="attendance-card-table">
              <tr>
                <th>Date</th>
                <th>Leave Type</th>
                <th>Status</th>
              </tr>
              {attendceCard_tableData.map((item) => {
                return (
                  <tr>
                    <td>{item.date}</td>
                    <td> {item.leaveType}</td>
                    <td>
                      {" "}
                      <Chip variant="filled" color="success">
                        {item.status ? "Approved" : "Pending"}
                      </Chip>
                    </td>
                  </tr>
                );
              })}
            </table>
          </div>
        </div>{" "}
        {/*  */}
        <div className="h-[288px] custom-statCard">
          <div className="border-b flex items-end gap-4 px-10 py-4">
            <p className="text-[18px] font-[600]"> Salary</p>
            <a href="#" className="text-[12px] text-[#5C96EE]">
              Vilew All {">"}
            </a>
          </div>
          <div>
            <table id="salary-card-table" className="">
              <tr>
                <th>Date</th>
                <th>Invoice No</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
              {attendceCard_tableData.map((item) => {
                return (
                  <tr>
                    <td>{item.date}</td>
                    <td> {item.leaveType}</td>
                    <td>
                      {" "}
                      <Chip variant="filled" color="success">
                        {item.status ? "Approved" : "Pending"}
                      </Chip>
                    </td>
                    <td>
                      <LinkButton href="https://scalablecss.com/styled-components-global-styles/">
                        <AiOutlineDownload />
                      </LinkButton>
                    </td>
                  </tr>
                );
              })}
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
