export interface NewUser {
    email: string
    userName: string
    password: string
    authDevice: TwoFactorClientData
}

export interface TwoFactorClientData {
    appName: string
    appID: string
    os: string
    deviceModel: string
    deviceName: string
    isTemp?: boolean
}

export interface DeviceTwoFactor {
    id: string
    deviceData: TwoFactorClientData
    addedData: number
    expTime?: number
    primary: boolean
}

export interface TokenIDHashData {
    userID: string
    app: string
    deviceID: string
    os: string
}

export interface TokenConfig {
    [deviceHash: string]: {
        firstInsert: number,
        lastUpdated: number,
        tokenID: string,
        priority: number
    }
}
export interface appMessageToken {
    appID: string
    tokenConfig: TokenConfig
}


export interface appPreference {
    appID: string
    [key: string]: any
}

export interface NewUserUpdate {
    newPassword: string | undefined
    newEmail: string | undefined
}

export interface UserSystemProfiles {
    profileID: string;
    firstName: string | null;
    lastName: string | null;
    username: string | null;
    recoveryEmail: string | null;
    mobileNumber: any;
}

export enum UserCreationErrors {
    emailNotValid = 'email not valid',
    usernameShort = 'username too short',
    usernameLong = "username too long",
    userExist = "this username already exist",
    deviceDataMissing = "no device data received"
}

export interface UserCreationResults {
    isValid: boolean,
    errorMessage?: string[]
}

export interface PasswordConfig {
    allowPassphrases: boolean,
    maxLength: number
    minLength: number
    testPass?: number
}


export interface UsernameConfig {
    maxLength: number
    minLength: number
}

export interface CompositeTokenData {
    [idHash: string]: TokenMetaData
}
export interface TokenIDHashData {
    userID: string
    app: string
    deviceID: string
    os: string
}

export interface TokenMetaData {
    app: string
    token: string | null
    updateAt: number
}