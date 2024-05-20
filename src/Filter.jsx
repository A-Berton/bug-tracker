import React from 'react'
import { HStack, Menu, MenuButton, MenuList, IconButton, MenuItem, Select } from '@chakra-ui/react'
import { VscFilter } from 'react-icons/vsc';
import { useGlobalContext } from './store';


const Filter = () => {

    const { data, updateBugs } = useGlobalContext();
    const handleSortChange = (e) => {
        let sortedData;
        
        const parseDate = (dateStr) => {
            const [day, month, year] = dateStr.split('/');
            return new Date(year, month - 1, day);
        };
        //(a, b) => a - b sorts numbers in ascending order.
        if (e.target.value === "old") {
            sortedData = [...data].sort((a, b) => parseDate(a.updated) - parseDate(b.updated));
        } else if (e.target.value === "new") {
            sortedData = [...data].sort((a, b) => parseDate(b.updated) - parseDate(a.updated));
        }
        updateBugs(sortedData);
      }

      const handleFilterChange = (filterType, filterValue) => {
        let filteredData;
        if (filterType === 'status') {
            filteredData = data.filter(bug => bug.status === filterValue);
        } else if (filterType === 'priority') {
            filteredData = data.filter(bug => bug.priority === filterValue);
        }
        updateBugs(filteredData);
    };

    return (
        <div>
            <HStack>
                <Select placeholder='Sort by' onChange={handleSortChange}>
                    <option value="old">Date: oldest to newest</option>
                    <option value="new">Date: newest to oldest</option>
                </Select>
                <Menu>
                    <MenuButton
                        as={IconButton}
                        aria-label='Options'
                        icon={<VscFilter />}
                        variant='outline'
                    />
                    <MenuList>
                        <MenuItem onClick={() => handleFilterChange('status', 'Open')}>Status: Open</MenuItem>
                        <MenuItem onClick={() => handleFilterChange('status', 'Closed')}>Status: Closed</MenuItem>
                        <MenuItem onClick={() => handleFilterChange('priority', 'High')}>Priority: High</MenuItem>
                        <MenuItem onClick={() => handleFilterChange('priority', 'Medium')}>Priority: Medium</MenuItem>
                        <MenuItem onClick={() => handleFilterChange('priority', 'Low')}>Priority: Low</MenuItem>
                    </MenuList>
                </Menu>
            </HStack>
        </div>
    );
}

export default Filter
