"use client";
import React, { createContext, useContext, useState, useEffect } from "react";

export type CartItem = {
    id: string;
    name: string;
    price: number;
    image: string;
    color?: string;
    size?: string;
    quantity: number;
};

type CartContextType = {
    items: CartItem[];
    addItem: (item: CartItem) => void;
    removeItem: (id: string, color?: string, size?: string) => void;
    updateQty: (id: string, color: string | undefined, size: string | undefined, qty: number) => void;
    clearCart: () => void;
    totalItems: number;
    totalPrice: number;
    isOpen: boolean;
    setIsOpen: (v: boolean) => void;
};

const CartContext = createContext<CartContextType | null>(null);

export function CartProvider({ children }: { children: React.ReactNode }) {
    const [items, setItems] = useState<CartItem[]>([]);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        try {
            const saved = localStorage.getItem("pdci_cart");
            if (saved) {
                const parsed = JSON.parse(saved);
                if (Array.isArray(parsed)) setItems(parsed);
            }
        } catch {
            // Corrupted storage — start with empty cart
            localStorage.removeItem("pdci_cart");
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("pdci_cart", JSON.stringify(items));
    }, [items]);

    const key = (id: string, color?: string, size?: string) =>
        `${id}__${color ?? ""}__${size ?? ""}`;

    const addItem = (item: CartItem) => {
        setItems((prev) => {
            const exists = prev.find(
                (i) => key(i.id, i.color, i.size) === key(item.id, item.color, item.size)
            );
            if (exists) {
                return prev.map((i) =>
                    key(i.id, i.color, i.size) === key(item.id, item.color, item.size)
                        ? { ...i, quantity: i.quantity + item.quantity }
                        : i
                );
            }
            return [...prev, item];
        });
        setIsOpen(true);
    };

    const removeItem = (id: string, color?: string, size?: string) => {
        setItems((prev) =>
            prev.filter((i) => key(i.id, i.color, i.size) !== key(id, color, size))
        );
    };

    const updateQty = (id: string, color: string | undefined, size: string | undefined, qty: number) => {
        if (qty < 1) return removeItem(id, color, size);
        setItems((prev) =>
            prev.map((i) =>
                key(i.id, i.color, i.size) === key(id, color, size) ? { ...i, quantity: qty } : i
            )
        );
    };

    const clearCart = () => setItems([]);

    const totalItems = items.reduce((s, i) => s + i.quantity, 0);
    const totalPrice = items.reduce((s, i) => s + i.price * i.quantity, 0);

    return (
        <CartContext.Provider
            value={{ items, addItem, removeItem, updateQty, clearCart, totalItems, totalPrice, isOpen, setIsOpen }}
        >
            {children}
        </CartContext.Provider>
    );
}

export function useCart() {
    const ctx = useContext(CartContext);
    if (!ctx) throw new Error("useCart must be used within CartProvider");
    return ctx;
}