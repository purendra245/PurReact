if(NOT TARGET hermes-engine::libhermes)
add_library(hermes-engine::libhermes SHARED IMPORTED)
set_target_properties(hermes-engine::libhermes PROPERTIES
    IMPORTED_LOCATION "/Users/tjha/.gradle/caches/8.14.1/transforms/241d88cecf7a7b4d4bde264ac63a3883/transformed/jetified-hermes-android-0.80.1-debug/prefab/modules/libhermes/libs/android.arm64-v8a/libhermes.so"
    INTERFACE_INCLUDE_DIRECTORIES "/Users/tjha/.gradle/caches/8.14.1/transforms/241d88cecf7a7b4d4bde264ac63a3883/transformed/jetified-hermes-android-0.80.1-debug/prefab/modules/libhermes/include"
    INTERFACE_LINK_LIBRARIES ""
)
endif()

