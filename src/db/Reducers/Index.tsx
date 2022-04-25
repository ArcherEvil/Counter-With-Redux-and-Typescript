
interface action {
    type: string;
    payload?: any;
}

export const counterReducer = (state = 0, action: action) => {
    switch (action.type) {
        case 'Increment':
            return state + 1
        case 'Decrement':
            return state - 1
        default:
            return state
    }
}

export const SidebarReducer = (state = false, action: action) => {
    switch (action.type) {
        case 'Sidebar':
            return !state
        default:
            return state
    }
}