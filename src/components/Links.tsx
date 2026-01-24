import { ReactNode } from "react";

export function getUrl(path: string) {
    if (path.startsWith('/'))
        path = path.substring(1);

    return process.env.NODE_ENV === 'development'
        ? `http://localhost:3000/${path}`
        : `https://pahkasoft.com/${path}`;
}

export function PathLink({ path, children }: { path: string, children: ReactNode }) {
    const url = getUrl(path);
    return <a href={url}>{children}</a>;
}

export function ApiLink({ api_dir, version, children }: { api_dir: string, version: string, children: ReactNode }) {
    const url = getUrl(`/${api_dir}/api/v${version}/index.html`);
    return <a href={url} target="_blank">{children}</a>;
}
