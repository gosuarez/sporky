import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";

const RecipeCardSkeleton = () => {
  return (
    <Card>
      <Skeleton height="300px" />
      <CardBody>
        <SkeletonText />
      </CardBody>
    </Card>
  );
};

export default RecipeCardSkeleton;
