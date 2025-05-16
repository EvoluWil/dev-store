export type Option = {
  label: string;
  value: string;
  id: string;
  disabled?: boolean;
};

export type Variant = {
  id: string | null;
  color: string | null;
  size: string | null;
  quantity: number;
};
