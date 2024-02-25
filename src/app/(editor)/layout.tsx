import { SiteFooter } from "@/components/site-footer";
import { type Metadata } from "next";

export const metadata: Metadata = {
    title: "Editor"
};

export default async function MarketingLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex min-h-screen flex-col">
            <main className="flex-1">{children}</main>
            <SiteFooter />
        </div>
    );
}
