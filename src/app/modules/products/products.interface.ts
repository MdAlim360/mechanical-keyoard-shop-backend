
export interface TProducts {
    name: string
    image?: string
    description: string
    price: number
    category: string
    tags: string[]
    variants: Variant[]
    inventory: Inventory
}

export interface Variant {
    type: string
    value: string
}

export interface Inventory {
    quantity: number
    inStock: boolean
}