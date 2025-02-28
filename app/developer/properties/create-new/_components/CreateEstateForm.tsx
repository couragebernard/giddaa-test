"use client"

import { estateZSchema, estateZType } from '@/schemas/developer';
import React, { useEffect, useTransition } from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form';
import GiddaaButton from '@/components/neutral/buttons/GiddaaButton';
import CitySelect from './CitySelect';
import InputField from './InputField';
import SelectField from './SelectField';
import { createEstate } from '@/actions/developer';
import { showToast } from '@/lib/ShowToast';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';

export const input_class = "w-full text-sm pl-4 py-5 rounded-full border-gray-300"
export const select_class = "w-full text-sm pl-4 py-5 rounded-full border-gray-300"
export const label_class = "text-gray-800 text-sm font-semibold"

type FormKeys = keyof {
    name: string;
    cityId: string;
    address: string;
    videoUrl: string;
    ownerType: string;
    landmark: string;
    description: string;
    completionDate: string;
    completionLevel: number;
    longitude: number;
    latitude: number;
    landSize: number;
    organizationId: string;
    floors: number;
};

const formSchema: { key: FormKeys, label: string; type: string }[] = [
    { key: "name", label: "Name", type: "text" },
    { key: "address", label: "Address", type: "text" },
    { key: "videoUrl", label: "Video URL", type: "url" },
    { key: "ownerType", label: "Owner Type", type: "text" },
    { key: "landmark", label: "Landmark", type: "text" },
    { key: "description", label: "Description", type: "text" },
    { key: "completionDate", label: "Completion Date", type: "datetime-local" },
    { key: "completionLevel", label: "Completion Level", type: "number" },
    { key: "longitude", label: "Longitude", type: "number" },
    { key: "latitude", label: "Latitude", type: "number" },
    { key: "landSize", label: "Land Size", type: "number" },
    { key: "organizationId", label: "Organization ID", type: "text" },
    { key: "floors", label: "Floors", type: "number" },
];


const featureFields = [
    // { key: "id", label: "Feature ID", type: "text" },
    { key: "name", label: "Feature Name", type: "text" },
    // { key: "icon", label: "Feature Icon", type: "text" },

    // Boolean Fields (Mostly Select Elements)
    { key: "hasAmpleParkingSpace", label: "Ample Parking Space", type: "boolean" },
    { key: "hasUniformSecurity", label: "Uniform Security", type: "boolean" },
    { key: "hasUniformedSecurity", label: "Uniform Security", type: "boolean" },
    { key: "hasCCTVSurveillanceSystem", label: "CCTV Surveillance", type: "boolean" },
    { key: "hasInverter", label: "Inverter", type: "boolean" },
    { key: "has24HoursElectricity", label: "24 Hours Electricity", type: "boolean" },
    { key: "hasInternetServices", label: "Internet Services", type: "boolean" },
    { key: "hasFiberOptics", label: "Fiber Optics", type: "boolean" },
    { key: "hasReliableWaterSupply", label: "Reliable Water Supply", type: "boolean" },
    { key: "hasChildrenPlayground", label: "Children Playground", type: "boolean" },
    { key: "hasEquestrainOrPoloCenter", label: "Equestrian/Polo Center", type: "boolean" },
    { key: "hasTennisCourt", label: "Tennis Court", type: "boolean" },
    { key: "hasGolfCourt", label: "Golf Course", type: "boolean" },
    { key: "hasLoungeOrBar", label: "Lounge/Bar", type: "boolean" },
    { key: "hasResturant", label: "Restaurant", type: "boolean" },
    { key: "hasLakesOrPonds", label: "Lakes/Ponds", type: "boolean" },
    { key: "hasGazebos", label: "Gazebos", type: "boolean" },
    { key: "hasChildcareFacilities", label: "Childcare Facilities", type: "boolean" },
    { key: "hasSchool", label: "School", type: "boolean" },
    { key: "hasHospital", label: "Hospital", type: "boolean" },
    { key: "hasShoppingComplex", label: "Shopping Complex", type: "boolean" },
    { key: "hasChurchOrMosque", label: "Church/Mosque", type: "boolean" },
    { key: "hasGreeneryAndOpenGardens", label: "Greenery/Open Gardens", type: "boolean" },
    { key: "hasGym", label: "Gym", type: "boolean" },
    { key: "hasBasketballCourt", label: "Basketball Court", type: "boolean" },
    { key: "hasFootballPitch", label: "Football Pitch", type: "boolean" },
    { key: "hasSwimmingPool", label: "Swimming Pool", type: "boolean" },
    { key: "hasClubHouse", label: "Clubhouse", type: "boolean" },
    { key: "hasBank", label: "Bank", type: "boolean" },
    { key: "hasCinema", label: "Cinema", type: "boolean" },
    { key: "hasEnsuite", label: "Ensuite", type: "boolean" },
    { key: "hasPoPCeiling", label: "PoP Ceiling", type: "boolean" },
    { key: "hasWalkInClosets", label: "Walk-In Closets", type: "boolean" },
    { key: "hasAirConditioning", label: "Air Conditioning", type: "boolean" },
    { key: "hasSpeedInternet", label: "High-Speed Internet", type: "boolean" },
    { key: "hasWineCeller", label: "Wine Cellar", type: "boolean" },
    { key: "hasFurnished", label: "Furnished", type: "boolean" },
    { key: "hasWifi", label: "WiFi", type: "boolean" },
    { key: "hasFibreOptics", label: "Fibre Optics", type: "boolean" },
    { key: "hasSatelliteTV", label: "Satellite TV", type: "boolean" },
    { key: "hasElevator", label: "Elevator", type: "boolean" },
    { key: "hasBoysQuarters", label: "Boys' Quarters", type: "boolean" },
    { key: "hasSmartHomeTechnology", label: "Smart Home Technology", type: "boolean" },
    { key: "hasFullyEquippedKitchen", label: "Fully Equipped Kitchen", type: "boolean" },
    { key: "hasModernAppliances", label: "Modern Appliances", type: "boolean" },
    { key: "hasGraniteCountertops", label: "Granite Countertops", type: "boolean" },
    { key: "hasBreakfastBar", label: "Breakfast Bar", type: "boolean" },
    { key: "hasStorageRoom", label: "Storage Room", type: "boolean" },
    { key: "hasUpgradedBathroomFeatures", label: "Upgraded Bathroom Features", type: "boolean" },
    { key: "hasSpaLikeFeatures", label: "Spa-Like Features", type: "boolean" },
    { key: "hasTileOrMarbleFeatures", label: "Tile/Marble Features", type: "boolean" },
    { key: "hasOpenFloorPlan", label: "Open Floor Plan", type: "boolean" },
    { key: "hasLargeWindows", label: "Large Windows", type: "boolean" },
    { key: "hasBuiltInHouseTheater", label: "Built-In Home Theater", type: "boolean" },
    { key: "hasPrivateBackyard", label: "Private Backyard", type: "boolean" },
    { key: "hasPatioOrDeckSpace", label: "Patio/Deck Space", type: "boolean" },
    { key: "hasLandscapedGarden", label: "Landscaped Garden", type: "boolean" },
    { key: "hasHomeOfficeSpace", label: "Home Office Space", type: "boolean" },
    { key: "hasBuiltInShelfOrBookSpace", label: "Built-in Shelves/Book Space", type: "boolean" },
    { key: "hasAmpleNaturalLight", label: "Ample Natural Light", type: "boolean" },
    { key: "hasSecuritySystem", label: "Security System", type: "boolean" },
    { key: "hasBulletProofDoors", label: "Bullet-Proof Doors", type: "boolean" },
    { key: "hasGatedCompound", label: "Gated Compound", type: "boolean" },
    { key: "hasReinforcedDoorsAndWindows", label: "Reinforced Doors & Windows", type: "boolean" },
    { key: "hasGuardedCommunity", label: "Guarded Community", type: "boolean" },
    { key: "hasParkingGarage", label: "Parking Garage", type: "boolean" },
    { key: "hasDriveWaySpace", label: "Driveway Space", type: "boolean" },
    { key: "hasStreetParkingAvailability", label: "Street Parking Availability", type: "boolean" },
    { key: "hasPrivateParkingSpace", label: "Private Parking Space", type: "boolean" },
    { key: "hasElectricity", label: "Electricity", type: "boolean" },
    { key: "hasBackupGenerator", label: "Backup Generator", type: "boolean" },
    { key: "hasBorehole", label: "Borehole", type: "boolean" },
    { key: "hasWaterBoard", label: "Water Board Connection", type: "boolean" },
    { key: "hasProximityToSchools", label: "Proximity to Schools", type: "boolean" },
    { key: "hasProximityToShoppingMalls", label: "Proximity to Shopping Malls", type: "boolean" },
    { key: "hasProximityToSupermarkets", label: "Proximity to Supermarkets", type: "boolean" },
    { key: "hasNearbyPublicTransportation", label: "Nearby Public Transportation", type: "boolean" },
    { key: "hasAccessibilityViaBoltOrUber", label: "Accessibility via Bolt/Uber", type: "boolean" },
    { key: "hasFencedBackyard", label: "Fenced Backyard", type: "boolean" },
    { key: "hasPetFriendlyNeighborhood", label: "Pet-Friendly Neighborhood", type: "boolean" },
    { key: "hasNearbyWalkingTrailsAndSidewalks", label: "Nearby Walking Trails & Sidewalks", type: "boolean" }
];



const CreateEstateForm = () => {
    const [isPending, startTransition] = useTransition();
    const router = useRouter()

    const {
        register,
        handleSubmit,
        setValue,
        reset,
        formState: { errors },
    } = useForm<estateZType>({
        resolver: zodResolver(estateZSchema),
    });


    useEffect(()=>{
        console.log(errors)
    },[errors])

    const onSubmit = async (formData: estateZType) => {
        
        startTransition(async () => {
            const {data,error} = await createEstate(formData)
            if (error) {
                return showToast('error', error || 'Error signing in');
            }
            if (data) {
                reset()
                return showToast('success', 'Estate created successfully');
                
            }
                       

        })

    };


    return (
        <div className='px-2 lg:px-8 py-5'>
            <form className="space-y-4" onSubmit={handleSubmit(onSubmit)} >

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-y-4 gap-x-2 mb-4">
                    {formSchema.map((field) => (
                        <InputField
                            key={field.key}
                            label={field.label}
                            name={field.key}
                            type={field.type}
                            register={register}
                            error={errors[field.key]}
                            labelClass={label_class}
                            inputClass={input_class}
                        />
                    ))}
                    <CitySelect setValue={setValue} />

                </div>

                <p className='font-bold text-lg text-giddaa-500'>FEATURES</p>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-y-4 gap-x-2">
                    {featureFields.map((field) => (
                        <SelectField key={field.key} field={field} errors={errors} setValue={setValue} register={register} />
                    ))}

                </div>

                <div className="!mt-8 flex justify-center gap-2">
                    <Button variant="outline" onClick={()=> router.back()} className='rounded-full'>Cancel</Button>
                    <GiddaaButton type='submit' text='Create' className='w-fit' disabled={isPending} loading={isPending} />
                </div>

            </form>
        </div>
    )
}

export default CreateEstateForm