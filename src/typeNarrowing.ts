// unknown can hold any value, but you must narrow the type before using it.
// Type Narrowing - Runtime check karke TypeScript ko batana ki ab is block ke andar iska type kya hai.

function getChai (kind: string | number) {
    if (typeof kind === 'string') {
        return `making ${kind} chai...`
    }
    return `chai order: ${kind}`
}

function serveChai (msg?: string) {
    if (msg) {
        return `Serving ${msg}`
    }
    return `serving default masala chai`
}

function orderChai (size: "small" | "medium" | "large" | number) {
    if (size === "small") {
        return `small cuttting chai...`
    }
    if (size === "medium" || size === "large") {
        return `make extra chai...`
    }
    return `chai order #${size}`
}

class kulhadChai {
    serve () {
        return `Serving kulhad chai`
    }
}

class Cutting {
    serve () {
        return `Serving cutting chai`
    }
}

function serve(chai: kulhadChai | Cutting) {
    if (chai instanceof kulhadChai) {
        return chai.serve()
    }
}

type ChaiOrder = {
    type: string,
    sugar: number
}

function isChaiOrder(obj: any) : obj is ChaiOrder {
    return (
        typeof obj === "object" &&
        obj !== null && 
        typeof obj.type === "string" &&
        typeof obj.sugar === "number" 
    )
}

function serveOrder(item: ChaiOrder | string) {
    if (isChaiOrder(item)) {
        return `Serving ${item.type} chai with ${item.sugar} sugar`
    }
    return `Serving custom chai: ${item}`
}

type MasalaChai = { type: "masala", spicelevel: number }
type GingerChai = { type: "ginger", amount: number }
type ElaichiChai = { type: "elaichi", aroma: number }

type Chai = MasalaChai | GingerChai | ElaichiChai

function MakeChai(order: Chai) {
    switch (order.type) {
        case "masala":
            return `Masala Chai`
            break;
        case "elaichi":
            return `Elaichi Chai`
            break;
        case "ginger":
            return `Ginger Chai`
            break;
        default:
            break;
    }
}

function brew(order: MasalaChai | GingerChai) {
    if ("spicelevel" in order) {
        // 
    }
}

// function isStringArray (arr: unknown): arr is string[] {
    
// }