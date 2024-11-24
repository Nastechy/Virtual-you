import { Card } from "@/components/ui/card"
import { TeamMember } from "@/data/mappings"
import Image from "next/image"

interface TeamMemberCardProps {
    member: TeamMember
}

export function TeamMemberCard({ member }: TeamMemberCardProps) {
    return (
        <Card className="group relative overflow-hidden rounded-3xl border-0 bg-gradient-to-br p-px transition-all hover:shadow-lg"
            style={{
                backgroundImage: `linear-gradient(to bottom right, ${member.gradientFrom}, ${member.gradientTo})`
            }}>
            <div className="relative flex h-full flex-col items-center gap-1 rounded-3xl bg-white p-6 dark:bg-gray-950">
                <div className="relative aspect-square w-full overflow-hidden rounded-2xl">
                    <Image
                        src={member.avatarUrl}
                        width={290}
                        height={290}
                        alt={`${member.firstName} ${member.lastName}`}
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                </div>
                <h3 className="mt-4 text-center text-lg font-semibold">
                    {member.firstName} {member.lastName}
                </h3>
                <p className="text-center text-sm text-muted-foreground">
                    {member.role}
                </p>
            </div>
        </Card>
    )
}

