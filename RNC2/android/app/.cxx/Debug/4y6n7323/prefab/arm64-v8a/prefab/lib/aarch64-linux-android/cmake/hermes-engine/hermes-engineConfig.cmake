if(NOT TARGET hermes-engine::libhermes)
add_library(hermes-engine::libhermes SHARED IMPORTED)
set_target_properties(hermes-engine::libhermes PROPERTIES
    IMPORTED_LOCATION "/Users/tjha/.gradle/caches/8.11.1/transforms/e9273c7d8d72025acdc921102fa44ee6/transformed/jetified-hermes-android-0.80.1-debug/prefab/modules/libhermes/libs/android.arm64-v8a/libhermes.so"
    INTERFACE_INCLUDE_DIRECTORIES "/Users/tjha/.gradle/caches/8.11.1/transforms/e9273c7d8d72025acdc921102fa44ee6/transformed/jetified-hermes-android-0.80.1-debug/prefab/modules/libhermes/include"
    INTERFACE_LINK_LIBRARIES ""
)
endif()

