import React from "react";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import PropTypes from "prop-types";
import { placeholderCn, resetOutline } from "@/lib/classnames";
import { cn } from "@/lib/utils";

const FormInput = ({ form, label, name, type = "text", placeholder = "" }) => {
  return (
    <div>
      <FormField
        name={name}
        control={form.control}
        render={({ field }) => (
          <FormItem>
            {label && <FormLabel>{label}</FormLabel>}
            <FormControl>
              <Input
                type={type}
                {...field}
                className={cn(resetOutline, placeholderCn)}
                placeholder={placeholder}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
};

export default FormInput;
FormInput.propTypes = {
  form: PropTypes.shape({
    control: PropTypes.any.isRequired,
  }),
  label: PropTypes.string,
  placeholder: PropTypes.string,
  name: PropTypes.string.isRequired,
  type: PropTypes.oneOf(["text", "password"]),
};
