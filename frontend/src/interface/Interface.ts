import type { ReactNode } from "react";

export interface User {
  _id: string;
  email: string;
  address: string;
  username: string;
  password: string;
  cart?: Product[];
  purchaseHistory?: PurchaseHistory[];
}

export interface ProductDetailProp {
  item: Product | undefined;
}

export interface PurchaseHistory {
  date: string;
  items: Product[];
  total: number;
}

export interface Article {
  image?: string;
  title: string;
  date: string;
  link?: string;
}

export interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  loading: boolean;
  signup: (user: User) => Promise<void>;
  signin: (user: User) => Promise<void>;
  logout: () => void;
  updateUserLocal: (user: User) => void;
}

export interface CartContextType {
  cart: Product[];
  purchaseHistory: PurchaseHistory[];

  setCart: React.Dispatch<React.SetStateAction<Product[]>>;
  setPurchaseHistory: React.Dispatch<React.SetStateAction<PurchaseHistory[]>>;

  handleAddItem: (item: Product) => void;
  handleRemoveItem: (product: Product) => void;
  handleBuy: () => void;
}

export interface Product {
  title: string;
  image: string;
  description: string;
  section: string;
  price: number;
  currentItemCount: number;
}

export interface NavLinkPageProps {
  mobile?: boolean;
  onClick?: () => void;
}

export interface BlockCardProps {
  image: string;
  text: string;
  textcolor: string;
  backgroundcolor: string;
  isReversed?: boolean;
}

export interface ExperienceCardProps {
  title: string;
  image: string;
  text: string;
  isReversed?: boolean;
}

export interface MenuSection {
  section: string;
  categorias: Categoria[];
}

export interface Categoria {
  title: string;
  image: string;
  sections: Subsection[];
}

export interface Subsection {
  section: string;
  sectionTitle: string;
}

export interface ItemListProps {
  targetCategory?: Categoria | undefined;
}

export interface ToastTypeProp {
  type: string;
  text: string;
}
export interface CategoryMenuProp {
  title: string;
}

export interface TextProp {
  text: string;
}

export interface ProductCardProps {
  data: Product | Categoria;
  isCategoryMenu: boolean;
}

export interface UserDataProps {
  user: User;
}

export interface UserUpdateRequestProps {
  email: string;
  cart: Product[];
  purchaseHistory: PurchaseHistory[];
}

export interface CartProviderProps {
  children: ReactNode;
}

export interface BuyButtonProp {
  item: Product;
}
