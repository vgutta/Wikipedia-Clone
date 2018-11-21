export interface UDPage{
    search: string;
    title: string;
    description: string;
    link: string;
}
export interface Section {
    title: string;
    content: string;
}

export interface Page {
    name: string;
    sections: Section[];
}

type Image = string;
// Image does not have a model; all it is is the id string.
// To display an image, use <img src="/api/images/{{id}}"></img>