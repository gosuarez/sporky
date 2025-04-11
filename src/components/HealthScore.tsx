import { Badge, Box } from "@chakra-ui/react";
import { GiHeartPlus } from "react-icons/gi";

interface Props {
  score: number;
}

const HealthScore = ({ score }: Props) => {
  function getHealthColor(score: number): string {
    if (score > 85) return "green";
    if (score > 70) return "yellow";
    if (score > 50) return "orange";
    return "red";
  }

  return (
    <Badge
      colorScheme={getHealthColor(score)}
      fontSize="14px"
      paddingX={2}
      borderRadius="4px"
      display="flex"
      alignItems="center"
      gap={1}
    >
      <Box as={GiHeartPlus} boxSize="14px" />
      {score}
    </Badge>
  );
};

export default HealthScore;
