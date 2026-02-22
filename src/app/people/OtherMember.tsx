"use client";

import React, { useState } from "react";
import MemberCard from "../../components/MemberCard";
import Loader from "../../components/Loader";
import { TeamMember } from "@/types";
import { useTeamMembersDetails } from "@/hooks/useTeamMembersDetails";
import MemberDetailsModal from "@/components/MemberDetailsModal";
function OtherMember() {
  // For the modal:
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  // const { Data, showLoading }: AppContextType = useContext(allContexts);
  // console.log(Data?.team[0].img);

  const { data: memberDetails, isLoading } = useTeamMembersDetails();
  // console.log("Member Details:", memberDetails);

  // Sorting the team data based on the "order" key
  const sortedTeam = memberDetails
    ?.slice()
    .sort((a: TeamMember, b: TeamMember) => a.order - b.order);

  return (
    <>
      <MemberDetailsModal
        open={isModalOpen}
        member={selectedMember}
        onClose={handleCancel}
      />

      {isLoading ? (
        <Loader />
      ) : (
        <div className="bg-secondary p-7 px-5 md:p-9 md:px-[5rem] mx-auto">
          <h1 className="flex justify-center items-center text-primary text-2xl font-semibold">
            Team Members:
          </h1>

          <div className="container mx-auto membercards_team_members grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-5 gap-2 gap-y-7 md:gap-[1rem] lg:gap-[2rem]">
            {sortedTeam &&
              sortedTeam.map((item: TeamMember) => (
                <div
                  key={`${item.name}-${item.id}`}
                  onClick={() => {
                    showModal();
                    setSelectedMember(item);
                  }}
                  className="cursor-pointer"
                >
                  <MemberCard
                    name={item.name}
                    img={item.img}
                    position={item.position}
                    email={item.email}
                    linkedin={item.linkedin}
                    desc={item.desc}
                    setIsModalOpen={setIsModalOpen}
                  />
                </div>
              ))}
          </div>
        </div>
      )}
    </>
  );
}

export default OtherMember;
