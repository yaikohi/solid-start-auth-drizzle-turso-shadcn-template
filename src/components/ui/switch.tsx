import { cn } from "@/lib/utils";
import { Switch as SwitchPrimitive } from "@kobalte/core";
import { splitProps, type ParentComponent } from "solid-js";

export const SwitchLabel = SwitchPrimitive.Label;
export const Switch = SwitchPrimitive.Root;
export const SwitchErrorMessage = SwitchPrimitive.ErrorMessage;
export const SwitchDescription = SwitchPrimitive.Description;

export const SwitchControl: ParentComponent<SwitchPrimitive.SwitchControlProps> = props => {
  const [local, rest] = splitProps(props, ["class", "children"]);

  return (
    <>
      <SwitchPrimitive.Input
        class={cn(
          "[&:focus-visible+div]:outline-none [&:focus-visible+div]:ring-2 [&:focus-visible+div]:ring-ring [&:focus-visible+div]:ring-offset-2 [&:focus-visible+div]:ring-offset-background",
          local.class
        )}
      />
      <SwitchPrimitive.Control
        class={cn(
          "inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent bg-input shadow-sm transition-colors data-[disabled]:cursor-not-allowed data-[checked]:bg-primary data-[disabled]:opacity-50",
          local.class
        )}
        {...rest}
      >
        {local.children}
      </SwitchPrimitive.Control>
    </>
  );
};

export const SwitchThumb: ParentComponent<SwitchPrimitive.SwitchThumbProps> = props => {
  const [local, rest] = splitProps(props, ["class"]);

  return (
    <SwitchPrimitive.Thumb
      class={cn(
        "pointer-events-none block h-4 w-4 translate-x-0 rounded-full bg-background shadow-lg ring-0 transition-transform data-[checked]:translate-x-4",
        local.class
      )}
      {...rest}
    />
  );
};
