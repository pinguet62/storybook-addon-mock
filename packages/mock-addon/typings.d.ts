export type Method = 'GET' | 'PUT' | 'POST' | 'DELETE' | 'PATCH' | 'OPTIONS'

export type Request = {
    body: string | null
    method: Method
    signal: AbortSignal | null
    url: string
    searchParams?: string
}

export type ResponseObj = string | object
export type ResponseFn = (request: Request) => ResponseObj
export type Response = ResponseObj | ResponseFn

export type StorybookAddonMockData = {
    url: string
    method: Method
    delay?: 0 | number
    status: number
    response: Response
}

declare module '@storybook/csf' {
    interface Parameters {
        mockAddonConfigs?: {
            globalMockData?: StorybookAddonMockData[]
            ignoreQueryParams?: boolean
            refreshStoryOnUpdate?: boolean
            disableUsingOriginal?: boolean
            disable?: boolean
        }
        mockData?: StorybookAddonMockData[]
    }
}
