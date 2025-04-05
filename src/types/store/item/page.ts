export type Form = {
  color: number;
  colorOptions: string[];
  frame: number;
  frameOptions: string[];
  onAddToCart: () => void;
  onSelectColor: (index: number) => void;
  onSelectFrame: (index: number) => void;
  onSelectQuantity: (index: number) => void;
  onSelectSize: (index: number) => void;
  hasColors: boolean;
  quantity: number;
  quantityOptions: string[];
  size: number;
  sizeOptions: string[];
};
