import PostList from "@/components/posts/post-list";
import TopicCreateForm from "@/components/topics/TopicCreateForm";
import { fetchTopPosts } from "@/lib/query/post";
import { TrendingUp, MessageSquare } from "lucide-react";

export default async function Home() {
  return (
    <div className="min-h-screen bg-[#1E1B2E] text-[#EDE9FE]">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-[#8B5CF6]/10 via-[#C084FC]/5 to-[#8B5CF6]/10 border-b border-[#3F3C5B]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-2">
              <span className="bg-gradient-to-r from-[#8B5CF6] via-[#C084FC] to-[#DDD6FE] bg-clip-text text-transparent">
                Welcome to Discuss
              </span>
            </h1>
            <p className="text-purple-300 text-lg">
              Discover trending topics and join engaging conversations
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3 space-y-6">
            
            {/* Posts Section */}
            <div className="bg-[#2A2438] border border-[#3F3C5B] rounded-xl overflow-hidden">
              <div className="border-b border-[#3F3C5B] px-6 py-4">
                <div className="flex items-center space-x-2">
                  <TrendingUp className="w-5 h-5 text-[#8B5CF6]" />
                  <h2 className="text-xl font-bold text-[#EDE9FE]">Trending Discussions</h2>
                  <div className="w-2 h-2 rounded-full bg-[#8B5CF6] animate-pulse"></div>
                </div>
                <p className="text-purple-300 text-sm mt-1">
                  Most engaging conversations right now
                </p>
              </div>
              <div className="p-2">
                <PostList fetchData={fetchTopPosts} />
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Create Topic Form */}
            <div className="bg-[#2A2438] border border-[#3F3C5B] rounded-xl overflow-hidden hover:shadow-lg hover:shadow-[#8B5CF6]/20 transition-all duration-300">
              <div className="border-b border-[#3F3C5B] px-4 py-3 bg-gradient-to-r from-[#8B5CF6]/10 to-[#C084FC]/10">
                <h3 className="font-semibold text-[#EDE9FE] flex items-center space-x-2">
                  <MessageSquare className="w-4 h-4 text-[#8B5CF6]" />
                  <span>Start a Discussion</span>
                </h3>
              </div>
              <div className="p-4">
                <TopicCreateForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}