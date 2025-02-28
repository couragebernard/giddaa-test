import React from "react";
import { MdError } from "react-icons/md";
import { getEstate } from "@/actions/developer";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import Header from "./_components/Header";
import EstateTabs from "./_components/EstateTabs";

type Props = {
    children: React.ReactNode;
    params: Promise<{
        id: string;
    }>;
};

const estateTabs = [
    {
        title: "Details",
        key: "details",
    },
    {
        title: "Properties",
        key: "property",
    },
    {
        title: "Allocation",
        key: "allocation",
    },
    {
        title: "Prospects",
        key: "prospects",
    },
    {
        title: "Analytics",
        key: "analytics",
    },
    {
        title: "Activity",
        key: "activity",
    },
];

export default async function Layout(props: Props) {
    const { id } = await props.params
    const { data, error } = await getEstate(id)
    if (error) {
        return <Alert>
            <MdError className="text-red-500" />
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>{error}</AlertDescription>
        </Alert>
    }
    return (
        <div className="">
            <div className="mb-5">
                <Header estateName={data?.name ?? "Estate"} />

            </div>
            <div className="w-full">
                <ul className="flex flex-wrap gap-5">
                    <div className="w-full space-y-10">

                        <EstateTabs items={estateTabs} />

                    </div>
                </ul>
            </div>

            {props.children}
        </div>
    );
}
