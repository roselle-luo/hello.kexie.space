import BaseUrl, { Logo } from "./cos";

interface Department {
    shortName: string
    fullName: string
    logo: string
    learningDirection: Array<string>
}

const departmentsMap = {
    Multimedia: {
        shortName: 'MD',
        fullName: "MultimediaDepartment",
        logo: Logo.Multimedia,
        learningDirection: [
            "网站开发", "UI设计", "视频剪辑", "小程序"
        ]
    },

    Software: {
        shortName: 'SD',
        fullName: "SoftwareDepertment",
        logo: Logo.Software,
        learningDirection: [
            "游戏制作", "APP开发", "深度学习"
        ]
    },

    Hardware: {
        shortName: 'HD',
        fullName: "HardwareDepartment",
        logo: Logo.Hardware,
        learningDirection: [
            "硬件开发"
        ]
    },

    Organization: {
        shortName: 'OD',
        fullName: "OrganizationDepartment",
        logo: Logo.Organization,
        learningDirection: [
        ]
    }
} as const

const departments = Object.values(departmentsMap);

type DepartmentKey = keyof typeof departmentsMap

type AnyDepartment = (typeof departmentsMap)[DepartmentKey];

type DepartmentShortName = AnyDepartment['shortName']

export type DepartmentFullName = AnyDepartment['fullName']

export const departmentShortNameMap = Object.fromEntries(
    departments.map(x => [x.shortName, x])
) as unknown as Record<DepartmentShortName, Department>


export const Department = {
    ...departmentShortNameMap,
    getByFullName: (fullname: DepartmentFullName) => {
        return departments.find(dept => {
            return dept.fullName === fullname;
        })!;
    },
    getByLearningDirection: (learningDirection: string) => {
        return departments.find(dept => {
            return (dept.learningDirection as readonly string[]).includes(learningDirection)
        })!;
    }
}