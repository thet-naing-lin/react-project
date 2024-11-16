import React from "react";
import { HiShoppingCart } from "react-icons/hi2";
import { SiPaperswithcode } from "react-icons/si";
import { AiFillProduct } from "react-icons/ai";
import { FaUserNinja } from "react-icons/fa";
import Container from "../../../components/Container";
import ModuleButton from "../components/ModuleButton";
import LogoutButton from "../../../components/LogoutButton";

const DashboardPage = () => {
  return (
    <section className="font-body font-bold">
      <Container>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-5">
          <div className="col-span-1 row-span-1">
            <ModuleButton
              name={"Product Module"}
              icon={<AiFillProduct className="size-10" />}
              url={"/dashboard/product"}
            />
          </div>
          <div className="col-span-1 row-span-1">
            <ModuleButton
              name={"Sale Module"}
              icon={<HiShoppingCart className="size-10" />}
              url={"/dashboard/sale"}
            />
          </div>
          <div className="col-span-1 row-span-1">
            <ModuleButton
              name={"Voucher Module"}
              icon={<SiPaperswithcode className="size-10" />}
              url={"/dashboard/voucher"}
            />
          </div>
          <div className="col-span-1 row-span-1">
            <ModuleButton
              name={"User Profile"}
              icon={<FaUserNinja className="size-10" />}
              url={"/dashboard/user-profile"}
            />
          </div>
        </div>

        <div className=" flex gap-3 items-center justify-end text-xs md:text-sm">
          <p className=" text-nowrap">If you done your job, just </p>
          <LogoutButton />
        </div>
      </Container>
    </section>
  );
};

export default DashboardPage;
