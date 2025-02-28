import { getEstate } from '@/actions/developer';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import React from 'react'
import { MdError } from 'react-icons/md';


type Props = {
    params: Promise<{
        id: string;
    }>;
};

const page = async (props: Props) => {
    const { id } = await props.params
    const { error } = await getEstate(id)
    if (error) {
        return <Alert>
            <MdError className="text-red-500" />
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>{error}</AlertDescription>
        </Alert>
    }
    return (
        <div className='px-5'>page</div>
    )
}

export default page