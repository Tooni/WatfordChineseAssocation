import { useState, useMemo, FunctionComponent } from "react";
import HolidayFinder, { HolidaysTypes } from "date-holidays";
import { Group, Stack, List, Text, Select, ComboboxData } from "@mantine/core";

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
    <List spacing="xs" size="sm" withPadding>
      {holidays.map((h) => {
        const isNext =
          upcoming && h.date === upcoming.date && h.name === upcoming.name;
        return (
          <List.Item key={`${h.date}-${h.name}`}>
            <Text c={isNext ? "red.9" : undefined}>
              {isNext ? "★ " : ""}
              {h.name} – {formatDate(h.date)}
            </Text>
          </List.Item>
        );
      })}
    </List>
  );
};

const formatDate = (dateStr: string) => {
  return new Date(dateStr).toISOString().slice(0, 10);
};
