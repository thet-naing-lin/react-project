import React from "react";
import Container from "../components/Container";
import ModuleBtn from "../components/ModuleBtn";
import { HiShoppingCart } from "react-icons/hi2";
import { SiPaperswithcode } from "react-icons/si";
import { AiFillProduct } from "react-icons/ai";
import Logout from "../components/Logout";
import { FaUserNinja } from "react-icons/fa";

const DashboardPage = () => {
  return (
    <section className="font-body font-bold">
      <Container>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-5">
          <div className="col-span-1 row-span-1">
            <ModuleBtn
              name={"Product Module"}
              icon={<AiFillProduct className="size-10" />}
              url={"/dashboard/product"}
            />
          </div>
          <div className="col-span-1 row-span-1">
            <ModuleBtn
              name={"Sale Module"}
              icon={<HiShoppingCart className="size-10" />}
              url={"/dashboard/sale"}
            />
          </div>
          <div className="col-span-1 row-span-1">
            <ModuleBtn
              name={"Voucher Module"}
              icon={<SiPaperswithcode className="size-10" />}
              url={"/dashboard/voucher"}
            />
          </div>
          <div className="col-span-1 row-span-1">
            <ModuleBtn
              name={"User Profile"}
              icon={<FaUserNinja className="size-10" />}
              url={"/dashboard/user-profile"}
            />
          </div>
        </div>

        <div className=" flex gap-3 items-center justify-end text-xs md:text-sm">
          <p className=" text-nowrap">If you done your job, just </p>
          <Logout />
        </div>
      </Container>
    </section>
  );
};

export default DashboardPage;
