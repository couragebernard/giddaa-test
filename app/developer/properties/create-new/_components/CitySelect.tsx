import { getCities, getCountries, getStates } from "@/actions/developer";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CityType, CountryType, StateType } from "@/types/developer";
import { useState, useEffect } from "react";
import { label_class, select_class } from "./CreateEstateForm";

type Props = {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    setValue: any
};


export default function CitySelect({ setValue }: Props) {
    const [countries, setCountries] = useState<CountryType[]>([]);
    const [states, setStates] = useState<StateType[]>([]);
    const [cities, setCities] = useState<CityType[]>([]);
    const [selectedCountry, setSelectedCountry] = useState("");
    const [selectedState, setSelectedState] = useState("");
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [selectedCity, setSelectedCity] = useState("");

    useEffect(() => {
        const fetchCountries = async () => {
            const { data, error } = await getCountries();
            if (error) {
                setCountries([]);
            } else {
                setCountries(data || []);
            }
        };
        fetchCountries();
    }, []);

    useEffect(() => {
        const fetchStates = async () => {
            if (!selectedCountry) return;
            const { data, error } = await getStates(selectedCountry);
            if (error) {
                setStates([]);
            } else {
                setStates(data || []);
            }
        };

        fetchStates();
        setSelectedState("");
        setCities([]);
        setSelectedCity("");
    }, [selectedCountry]);

    useEffect(() => {
        const fetchCities = async () => {
            if (!selectedState) return;
            const { data, error } = await getCities(selectedState);
            if (error) {
                setCities([]);
            } else {
                setCities(data || []);
            }
        };

        fetchCities();
        setSelectedCity("");
        setValue("cityId", "");
    }, [selectedState, setValue]);

    return (
        <>


            {/* Country */}
            <div className='space-y-1'>
                <Label className={`${label_class}`}>Country</Label>
                <Select onValueChange={(e) => setSelectedCountry(e)}>
                    <SelectTrigger className={`${select_class}`}>
                        <SelectValue placeholder="Select country" />
                    </SelectTrigger>
                    <SelectContent>
                        {countries.map((country) => (
                            <SelectItem key={country.id} value={country.id}>
                                {country.name}
                            </SelectItem>
                        ))}
                    </SelectContent>
                </Select>
            </div>

            {/* State */}
            <div className='space-y-1'>
                <Label className={`${label_class}`}>State</Label>
                <Select onValueChange={(e) => setSelectedState(e)} disabled={!selectedCountry}>
                    <SelectTrigger className={`${select_class}`}>
                        <SelectValue placeholder="Select state" />
                    </SelectTrigger>
                    <SelectContent>
                        {states.map((state) => (
                            <SelectItem key={state.id} value={state.id}>
                                {state.name}
                            </SelectItem>
                        ))}
                    </SelectContent>
                </Select>
            </div>

            {/* City */}
            <div className='space-y-1'>
                <Label className={`${label_class}`}>City</Label>
                <Select onValueChange={(e) => {
                    setSelectedCity(e);
                    setValue("cityId", e); // Update form state
                }} disabled={!selectedState}>
                    <SelectTrigger className={`${select_class}`}>
                        <SelectValue placeholder="Select city" />
                    </SelectTrigger>
                    <SelectContent>
                        {cities.map((city) => (
                            <SelectItem key={city.id} value={city.id}>
                                {city.name}
                            </SelectItem>
                        ))}
                    </SelectContent>
                </Select>
            </div>

            {/* City */}
            <div className='space-y-1'>
                <Label className={`${label_class}`}>Completion Status</Label>
                <Select onValueChange={(e) => {
                    setValue("completionStatus", e); // Update form state
                }}>
                    <SelectTrigger className={`${select_class}`}>
                        <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="UNDER_CONSTRUCTION">
                            Under construction
                        </SelectItem>
                        <SelectItem value="COMPLETED">
                            Completed
                        </SelectItem>
                    </SelectContent>

                </Select>
            </div>


        </>
    );
}
