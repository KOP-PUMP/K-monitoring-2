import { useState, useEffect } from "react";
import { CaretSortIcon, CheckCircledIcon } from "@radix-ui/react-icons";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

export interface ComboboxItemProps {
  value: string;
  label: string;
}

interface ComboboxProps {
  items: ComboboxItemProps[];
  className?: string;
  searchable?: boolean;
  onChange: (value: string) => void;
  default_value?: string;
}

export function Combobox({ items, className, searchable = true, default_value = "", onChange }: ComboboxProps) {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(default_value);

  useEffect(() => {
    if (default_value) {
      setValue(default_value);
      onChange(default_value);
    }
  }, [default_value, onChange]);

  return (
    <div className={cn("block", className)}>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button variant="outline" role="combobox" aria-expanded={open} className="w-[200px] justify-between">
            {value ? items.find((item) => item.value === value)?.label : `Select ${name}...`}
            <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[200px] p-0">
          <Command className="border-2">
            {searchable ? <CommandInput placeholder={`Search ${name}...`} /> : null}
            <CommandList>
              <CommandEmpty>No department found.</CommandEmpty>
              <CommandGroup>
                {items.map((item) => (
                  <CommandItem
                    key={item.value}
                    value={item.value}
                    onSelect={(currentValue) => {
                      onChange(item.value);
                      setValue(currentValue === value ? "" : currentValue);
                      setOpen(false);
                    }}>
                    <CheckCircledIcon
                      className={cn("mr-2 h-4 w-4", value === item.value ? "opacity-100" : "opacity-0")}
                    />
                    {item.label}
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    </div>
  );
}
