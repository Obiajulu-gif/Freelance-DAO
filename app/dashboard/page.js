import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Card } from "@/components/ui/card"
import { LayoutDashboard, Briefcase, Wallet, Vote, MessageSquare, Bell, Settings, TrendingUp } from "lucide-react"

export default function Dashboard() {
  return (
    <div className="p-4 md:p-6">
      <h1 className="text-2xl md:text-3xl font-bold mb-6">My Dashboard</h1>

      <div className="grid md:grid-cols-4 gap-4 mb-6">
        <DashboardCard
          title="Profile Completion"
          value="85%"
          trend="+5%"
          description="Complete your profile to increase visibility"
        />
        <DashboardCard title="Total Earnings" value="$1,250" trend="+$250" description="This month" />
        <DashboardCard title="Rating" value="4.8/5" trend="+0.2" description="Based on 24 reviews" />
        <DashboardCard title="Jobs Completed" value="12" trend="+3" description="This month" />
      </div>

      <Tabs defaultValue="overview" className="w-full">
        <TabsList className="grid grid-cols-4 md:grid-cols-8 mb-6">
          <TabsTrigger value="overview" className="flex items-center gap-2">
            <LayoutDashboard size={16} />
            <span className="hidden md:inline">Overview</span>
          </TabsTrigger>
          <TabsTrigger value="gigs" className="flex items-center gap-2">
            <Briefcase size={16} />
            <span className="hidden md:inline">My Gigs</span>
          </TabsTrigger>
          <TabsTrigger value="wallet" className="flex items-center gap-2">
            <Wallet size={16} />
            <span className="hidden md:inline">Wallet</span>
          </TabsTrigger>
          <TabsTrigger value="governance" className="flex items-center gap-2">
            <Vote size={16} />
            <span className="hidden md:inline">Governance</span>
          </TabsTrigger>
          <TabsTrigger value="messages" className="flex items-center gap-2">
            <MessageSquare size={16} />
            <span className="hidden md:inline">Messages</span>
          </TabsTrigger>
          <TabsTrigger value="notifications" className="flex items-center gap-2">
            <Bell size={16} />
            <span className="hidden md:inline">Notifications</span>
          </TabsTrigger>
          <TabsTrigger value="settings" className="flex items-center gap-2">
            <Settings size={16} />
            <span className="hidden md:inline">Settings</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="animate-fade-in">
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-4">
              <h3 className="text-lg font-bold mb-4">Ongoing Tasks</h3>
              <div className="space-y-4">
                <TaskItem title="Website Redesign for CryptoStart" progress={75} dueDate="Apr 30, 2025" />
                <TaskItem title="Smart Contract Audit" progress={30} dueDate="May 15, 2025" />
                <TaskItem title="Mobile App UI Design" progress={50} dueDate="May 5, 2025" />
              </div>
            </Card>

            <Card className="p-4">
              <h3 className="text-lg font-bold mb-4">Recent Proposals</h3>
              <div className="space-y-4">
                <ProposalItem
                  title="Lower Platform Fees for New Users"
                  status="Active"
                  votes={{ for: 65, against: 35 }}
                />
                <ProposalItem title="Add Support for New Blockchain" status="Active" votes={{ for: 82, against: 18 }} />
                <ProposalItem
                  title="Implement Skill Verification System"
                  status="Ended"
                  votes={{ for: 92, against: 8 }}
                />
              </div>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="gigs">
          <div className="text-center py-12">
            <p className="text-gray-500">Gigs content will be displayed here</p>
          </div>
        </TabsContent>

        <TabsContent value="wallet">
          <div className="text-center py-12">
            <p className="text-gray-500">Wallet content will be displayed here</p>
          </div>
        </TabsContent>

        <TabsContent value="governance">
          <div className="text-center py-12">
            <p className="text-gray-500">Governance content will be displayed here</p>
          </div>
        </TabsContent>

        <TabsContent value="messages">
          <div className="text-center py-12">
            <p className="text-gray-500">Messages content will be displayed here</p>
          </div>
        </TabsContent>

        <TabsContent value="notifications">
          <div className="text-center py-12">
            <p className="text-gray-500">Notifications content will be displayed here</p>
          </div>
        </TabsContent>

        <TabsContent value="settings">
          <div className="text-center py-12">
            <p className="text-gray-500">Settings content will be displayed here</p>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

function DashboardCard({ title, value, trend, description }) {
  const isPositive = trend.startsWith("+")

  return (
    <Card className="p-4">
      <div className="flex justify-between items-start mb-2">
        <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">{title}</h3>
        <span className={`text-xs ${isPositive ? "text-green-500" : "text-red-500"} flex items-center`}>
          {trend}
          <TrendingUp size={12} className="ml-1" />
        </span>
      </div>
      <div className="text-2xl font-bold mb-1">{value}</div>
      <p className="text-xs text-gray-500 dark:text-gray-400">{description}</p>
    </Card>
  )
}

function TaskItem({ title, progress, dueDate }) {
  return (
    <div className="border-b pb-3 last:border-0 last:pb-0">
      <div className="flex justify-between mb-1">
        <span className="font-medium">{title}</span>
        <span className="text-sm text-gray-500">{dueDate}</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5 mb-1">
        <div className="bg-primary h-2.5 rounded-full" style={{ width: `${progress}%` }}></div>
      </div>
      <div className="text-right text-xs text-gray-500">{progress}% Complete</div>
    </div>
  )
}

function ProposalItem({ title, status, votes }) {
  const statusColor = status === "Active" ? "text-green-500" : "text-gray-500"

  return (
    <div className="border-b pb-3 last:border-0 last:pb-0">
      <div className="flex justify-between mb-1">
        <span className="font-medium">{title}</span>
        <span className={`text-sm ${statusColor}`}>{status}</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5 mb-1">
        <div className="bg-primary h-2.5 rounded-full" style={{ width: `${votes.for}%` }}></div>
      </div>
      <div className="flex justify-between text-xs text-gray-500">
        <span>For: {votes.for}%</span>
        <span>Against: {votes.against}%</span>
      </div>
    </div>
  )
}
