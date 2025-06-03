import { useState, Fragment, useMemo, FunctionComponent } from "react";
import HolidayFinder, { HolidaysTypes } from "date-holidays";
import {
  Group,
  Stack,
  Text,
  Select,
  ComboboxData,
  SimpleGrid,
} from "@mantine/core";

const currentYear = new Date().getFullYear();

const regionOptions: ComboboxData = [
  { value: "HK", label: "Hong Kong" },
  { value: "TW", label: "Taiwan" },
  { value: "SG", label: "Singapore" },
  { value: "CN", label: "Mainland China" },
  { value: "GB", label: "Great Britain" },
];

export const Holidays: FunctionComponent = () => {
  const [selectedRegion, setSelectedRegion] = useState("HK");

  const holidays = useMemo(() => {
    const hd = new HolidayFinder();
    hd.init(selectedRegion);
    return hd.getHolidays(currentYear);
  }, [selectedRegion]);

  return (
    <Stack gap="md">
      <Group>
        <Text>Region:</Text>
        <Select
          data={regionOptions}
          value={selectedRegion}
          onChange={(value) => value && setSelectedRegion(value)}
          aria-label="Select region"
        />
      </Group>
      <RegionHolidayColumn holidays={holidays} />
    </Stack>
  );
};

interface RegionHolidayColumnProps {
  holidays: HolidaysTypes.Holiday[];
}

const RegionHolidayColumn: FunctionComponent<RegionHolidayColumnProps> = ({
  holidays,
}) => {
  const today = new Date();
  const todayStr = today.toISOString().slice(0, 10);

  // Find the next or today's holiday
  const upcoming = holidays
    .map((h) => ({ ...h, dateObj: new Date(h.date) }))
    .filter((h) => h.dateObj >= new Date(todayStr))
    .sort((a, b) => a.dateObj.getTime() - b.dateObj.getTime())[0];

  return (
    <SimpleGrid
      cols={2}
      w="auto"
      ml="md"
      verticalSpacing="xs"
      style={{ gridTemplateColumns: "max-content max-content" }}
    >
      {holidays.map((h) => {
        const isNext =
          upcoming && h.date === upcoming.date && h.name === upcoming.name;
        return (
          <Fragment key={`date-${h.date}-${h.name}`}>
            <Text span c={isNext ? "red.9" : undefined}>
              {formatDate(h.date)}
            </Text>
            <Text span ml="sm" c={isNext ? "red.9" : undefined}>
              {h.name}
            </Text>
          </Fragment>
        );
      })}
    </SimpleGrid>
  );
};

const formatDate = (dateStr: string) => {
  return new Date(dateStr).toISOString().slice(0, 10);
};
