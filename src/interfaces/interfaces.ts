export interface JokesStateI {
    joke: JokesI,
    loading: boolean,
    error: object
}

export interface MyJokesStateI {
}

export interface JokesI {
    categories: [],
    created_at: string,
    icon_url: string,
    id: string,
    updated_at: string,
    url: string,
    value: string
}

export interface RootStateI {
    jokes: JokesStateI,
    myJokes: Array<JokesI>
}