"use client";
import { AlumniCard } from "@/components/AlumniCard";
// import { AlumniSkeleton } from "@/components/alumni-skeleton"
// import { ErrorAlert } from "@/components/error-alert"
import { useAlumni } from "@/hooks/useAlumni";
import { Spin } from "antd";
import { Users } from "lucide-react";

export default function AlumniPage() {
  const { AlumniData: alumni, isLoading: loading } = useAlumni();

  return (
    <div className="min-h-[50vh] bg-primary py-auto">
      {/* Header Section */}
      {/* <div className="bg-[#005B96] text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center mb-4">
            <Users className="h-12 w-12 mr-4 text-[#00A6D6]" />
            <h1 className="text-4xl md:text-5xl font-bold font-lora">
              Our Alumni
            </h1>
          </div>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto font-open">
            Meet the brilliant minds who have contributed to our research lab
            and are now making significant impacts in their respective fields
            around the world.
          </p>
        </div>
      </div> */}

      {/* Alumni Grid Section */}
      <div className="container mx-auto my-auto items-center px-4 py-16 min-h-[50vh]">
        {loading ? (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mx-auto">
            <Spin
              size="large"
              className="flex justify-center items-center h-full w-full col-span-1 lg:col-span-2"
            />
          </div>
        ) : (
          <>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-[#005B96] mb-4 font-lora">
                Our Distinguished Past Members
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto font-open">
                Our members continue to excel in academia, industry, and
                research institutions worldwide. Their achievements reflect the
                quality of research and mentorship in our lab.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {(Array.isArray(alumni) ? alumni : []).map((member, id) => (
                <AlumniCard key={id} member={member} />
              ))}
            </div>

            {Array.isArray(alumni) && alumni.length === 0 && !loading && (
              <div className="text-center py-16">
                <Users className="h-16 w-16 mx-auto text-gray-400 mb-4" />
                <h3 className="text-xl font-semibold text-gray-500 mb-2 font-lora">
                  No Alumni Found
                </h3>
                <p className="text-gray-500 font-open">
                  Alumni information will be displayed here once available.
                </p>
              </div>
            )}

            <div>
              {Array.isArray(alumni) && alumni?.length > 6 && (
                <div className="text-center mt-8">
                  <div className="p-2 border-2 bg-tertiary text-primary cursor-pointer w-[200px] mx-auto rounded-md hover:-translate-0.25">
                    Load More
                  </div>
                </div>
              )}
            </div>
          </>
        )}
      </div>

      {/* Stats Section */}
      {/* <div className="bg-[#005B96]/5 py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-4xl font-bold text-[#005B96] font-lora">
                {Array.isArray(alumni) ? alumni.length : 0}+
              </div>
              <div className="text-gray-600 font-open">
                Distinguished Alumni
              </div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-[#00A6D6] font-lora">
                15+
              </div>
              <div className="text-gray-600 font-open">Countries Worldwide</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-[#F2994A] font-lora">
                50+
              </div>
              <div className="text-gray-600 font-open">
                Research Publications
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
}
