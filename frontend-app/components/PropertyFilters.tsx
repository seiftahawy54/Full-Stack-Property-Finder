'use client';

import {useState} from 'react';
import {PropertyFilters} from '../types/property';

interface PropertyFiltersProps {
    onFiltersChange: (filters: PropertyFilters) => void;
    isLoading?: boolean;
}

export default function PropertyFiltersComponent({onFiltersChange, isLoading}: PropertyFiltersProps) {
    const [filters, setFilters] = useState<PropertyFilters>({});

    const handleFilterChange = (key: keyof PropertyFilters, value: string) => {
        // If the key is 'search', ensure the value is a string
        const normalizedValue = key === 'search' ? String(value) : value;

        const newFilters = {
            ...filters,
            [key]: normalizedValue === '' ? undefined : normalizedValue,
        };
        setFilters(newFilters);
    };

    const clearFilters = () => {
        setFilters({});
        onFiltersChange({});
    };

    const submitSearch = () => {
        onFiltersChange(filters);
    }

    return (
        <div className="bg-white p-6 rounded-lg shadow-md mb-6">
            {/* Search Bar */}
            <div className="mb-4">
                <div className="relative">
                    <input
                        type="text"
                        placeholder="Search properties by title"
                        value={filters.search || ''}
                        className="w-full pl-10 pr-4 py-2 ps-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        disabled={isLoading}
                        onChange={(e) => handleFilterChange('search', e.target.value)}
                        onKeyDown={(e) => {
                            if (e.key === 'Enter') {
                                e.preventDefault();
                                submitSearch();
                            }
                        }}
                    />
                    {/*  Adding submit button for search  */}
                    <button
                        type="submit"
                        className="absolute right-3 top-2.5 h-5 w-5 text-gray-400"
                        disabled={isLoading}
                        onClick={submitSearch}
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
}
