import { createApi } from "../config/axios-config";
export interface GithubApiPublicRepo{
    id: number;
    name: string;
    description: string | null;
    html_url: string;
    language: string | null;
    created_at: string;
    updated_at: string;
    forks_count: number;
    stargazers_count: number;
    open_issues_count: number;
    

}

export const getAllMyPublicRepos = async():Promise<GithubApiPublicRepo[]> => {
    try{
        const api = await createApi();
        const response = await api.get<GithubApiPublicRepo[]>('/users/Nicolas-End/repos');
        return response.data;
    }catch(error){
        throw error;
    }
}
