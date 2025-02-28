"use client"

import { getAllEstates } from '@/actions/developer'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import React, { useEffect, useState, useTransition } from 'react'
import { MdError, MdPlayArrow } from 'react-icons/md';
import EstateCard from './EstateCard';
import { EstateType } from '@/types/developer';
import { FaPlus, FaSpinner } from 'react-icons/fa6';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const EstateCards = () => {

    const [estates, setEstates] = useState<EstateType[]>([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [totalRecords, setTotalRecords] = useState(0);
    const [isPending, startTransition] = useTransition()
    const [error, setError] = useState<string | null>(null);
    const [viewMoreNum, setViewMoreNum] = useState(0)

    useEffect(() => {
        startTransition(async () => {
            setError(null);

            const { data, error } = await getAllEstates(currentPage);

            if (error) {
                console.log(error)
                setError(error);
                return;
            }

            if (data) {
                console.log(data)
                setEstates(data.data);
                setTotalPages(data.totalPages);
                setTotalRecords(data.totalRecords)
            }
        });
    }, [currentPage]);

    useEffect(() => {
        const num = totalRecords - (currentPage * 10)
        setViewMoreNum(num > 0 ? num : 0)
    }, [currentPage, totalRecords])

    if (isPending) {
        return <div className="flex justify-center items-center h-20">
            < p className="text-gray-500 flex gap-1 items-center" > <FaSpinner className='animate-spin' /> Loading...</p >
        </div >
    }



    return (
        <div className='py-5 px-2 md:px-3 lg:py-8 lg:px-8'>


            {/* Show error message */}
            {error && (
                <Alert>
                    <MdError className="text-red-500" />
                    <AlertTitle>Error</AlertTitle>
                    <AlertDescription>{error}</AlertDescription>
                </Alert>
            )}

            {/* Show loading state */}
            {/* {isPending && (
                <div className="flex justify-center items-center h-20">
                    <p className="text-gray-500 flex gap-1 items-center"><FaSpinner className='animate-spin' /> Loading...</p>
                </div>
            )
            } */}



            {
                estates.length > 0 && (
                    <>
                        <div className="flex justify-between py-5">
                            <p className='font-bold text-2xl'>Estates - {totalRecords ?? 0}</p>

                            <Button asChild className='text-white rounded-full bg-giddaa-500 hover:bg-giddaa-600'>
                                <Link href="/developer/properties/create-new"><FaPlus className='text-white' /> Create</Link>
                            </Button>

                        </div>

                        <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-3'>
                            {
                                estates?.map((estate) => {
                                    return (
                                        <div key={estate.id} className='cursor-pointer'>
                                            <EstateCard estate={estate} />
                                        </div>
                                    )
                                })
                            }
                        </div>


                        {/* Pagination Controls */}
                        <div className="flex justify-center mt-4">
                            <button
                                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                                disabled={currentPage === 1}
                                className="p-1 mr-2 h-fit flex justify-center items-center bg-giddaa-500 text-white rounded-lg disabled:opacity-50"
                            >
                                <MdPlayArrow className='text-xl rotate-180' />
                            </button>



                            <button
                                onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                                disabled={currentPage === totalPages}
                                className="p-1 ml-2 h-fit flex justify-center items-center text-white bg-giddaa-500 rounded-lg disabled:opacity-50"
                            >
                                <MdPlayArrow className='text-xl' />
                            </button>
                        </div>
                        <p className="mt-2 text-center text-giddaa-500">{`View ${viewMoreNum} more`}</p>
                    </>
                )


            }


        </div>
    )
}

export default EstateCards